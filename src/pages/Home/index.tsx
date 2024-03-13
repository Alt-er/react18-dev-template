import { readWriteAtom } from '@/store/Test';
import { Button } from 'antd';
import { useAtom } from 'jotai';
import { useStyles } from './styles';

export default function Home() {
    const [price2, setPrice2] = useAtom(readWriteAtom);
    // styles 对象在 useStyles 方法中默认会被缓存，所以不用担心 re-render 问题
    const { styles, cx, theme } = useStyles();

    return (
        <div className={cx('a-simple-create-style-demo-classname', styles.container)}>
            我是HOME
            <div className={styles.card}>createStyles Demo</div>
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
