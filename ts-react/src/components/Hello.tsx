import * as React from "react";

export interface IHelloProps { 
    compiler: string; 
    framework: string; 
}

interface IHelloState { 
    compiler: string; 
    framework: string;
    count: number;
}

// 'HelloProps'는 props의 형태를 나타냅니다.
// state는 설정되지 않으므로, `{}` 타입을 사용합니다.
export class Hello extends React.Component<IHelloProps, IHelloState> {

    state = {
        compiler: this.props.compiler,
        framework: this.props.framework,
        count: 0
    };

    onClick = (e) => {
        this.setState({ compiler: 'number' });
    }

    render() {
        let some;

        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}