import CardWarpper from '@/components/CardWarpper';
import { createElement, useCallback, useMemo, useState } from 'react';

export default function ModelDesigner() {
    const [count, setCount] = useState(1);

    return (
        <div onClick={() => setCount(count + 1)}>
            {count}
            <CardWarpper title="字段">
                <div>字段界面</div>
            </CardWarpper>
            <CardWarpper title="关联关系">
                <div>关联关系界面</div>;
            </CardWarpper>
        </div>
    );
}
