import { readWriteAtom } from '@/store/Test';
import { Button } from 'antd';
import { useAtom } from 'jotai';

export default function Home() {
    const [price2, setPrice2] = useAtom(readWriteAtom);
    return (
        <div>
            我是HOME
            <div>{price2}</div>
            <Button
                onClick={() => {
                    setPrice2(price2 + 1);
                }}
            >
                点击
            </Button>
        </div>
    );
}
