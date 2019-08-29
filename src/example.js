import * as React from "react";
import { Card, StyledBody } from "baseui/card";

export default () => (
  <Card overrides={{ Root: { style: { width: "328px" } } }}>
    <StyledBody>hello!</StyledBody>
  </Card>
);
