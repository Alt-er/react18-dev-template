import Home from '../Home';
import { Button, Result } from 'antd';

type Props = { name: string; age: number };

export default function TsTest(): JSX.Element {
    const a = '111';
    const aaa = 'ssssssssssss';

    return (
        <>
            <TsTest2 name="张三" age={18}></TsTest2>
        </>
    );
}

const TsTest2 = (props: Props) => {
    console.info(111);
    return (
        <div>
            <div>姓名:{props.name}</div>
            <div>年龄:{props.age}</div>
            <Button>按钮</Button>
        </div>
    );
};
