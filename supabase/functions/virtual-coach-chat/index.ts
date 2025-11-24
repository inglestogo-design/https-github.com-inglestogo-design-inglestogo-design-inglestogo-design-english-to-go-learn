import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received message:", message);
    console.log("Conversation history length:", conversationHistory?.length || 0);

    // System prompt for English correction
    const systemPrompt = `You are an English teacher AI that corrects student writing in real-time. 

CRITICAL RULES:
1. Analyze the student's English text for errors
2. Provide corrections with color-coded feedback using HTML spans:
   - Green <span style="color: #22c55e; font-weight: 600;">✅ CORRECT</span> for correct parts
   - Red <span style="color: #ef4444; font-weight: 600;">🔴 ERROR</span> for mistakes
   - Orange <span style="color: #f97316; font-weight: 600;">💡 SUGGESTION</span> for improvements
   - Blue <span style="color: #3b82f6; font-weight: 600;">📘 EXPLANATION</span> for didactic explanations

3. Format your response like this:

**Original:**
[student's text]

**Corrections:**
🔴 **Error:** "[wrong text]" → "[correct text]"
📘 **Explanation:** [why it's wrong and the grammar rule]

🔴 **Error:** "[wrong text]" → "[correct text]"
📘 **Explanation:** [why it's wrong and the grammar rule]

**Correct sentence:**
✅ [fully corrected sentence] 🎯

**Encouragement:**
[motivational message with emoji]

4. Use emojis throughout to make it friendly and didactic
5. Always explain the grammar rule, don't just correct
6. Be encouraging and positive
7. If the text is already correct, praise them enthusiastically

Example:
If student writes: "I go to school yesterday"

Your response:
**Original:**
"I go to school yesterday"

**Corrections:**
🔴 **Error:** "I **go** to school yesterday" → "I **went** to school yesterday"
📘 **Explanation:** When talking about the past (yesterday = ontem), we use the past tense. "Go" becomes "went". Rule: Past simple for completed actions.

**Correct sentence:**
✅ "I went to school yesterday" 🎯

**Encouragement:**
Great effort! You're learning past tense! Keep practicing and you'll master it! 💪✨`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []),
      { role: "user", content: message }
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log("AI response generated successfully");

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in virtual-coach-chat:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
