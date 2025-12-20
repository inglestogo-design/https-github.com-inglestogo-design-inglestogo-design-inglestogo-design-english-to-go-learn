import React from "react";
import { AppCrashed } from "@/components/system/AppFallback";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // This is critical for debugging Safari/iPad crashes.
    console.error("💥 App crashed", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <AppCrashed error={this.state.error} />;
    }

    return this.props.children;
  }
}
