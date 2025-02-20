type FunctionProps = {
  children: () => React.ReactNode
}

export const Function = ({ children }: FunctionProps) => children()
