import { Card } from 'antd';

export default function CardWarpper(props: { title: string; children: React.ReactNode }) {
    const { title, children } = props;
    console.info(111);
    return (
        <Card title={title} style={{ width: 300 }}>
            {children}
        </Card>
    );
}
