import { atom } from 'jotai';

// 用户信息接口（根据后端实际返回的数据结构定义）
export interface UserInfo {
    id: number;
    username: string;
    name: string;
    gender: number;
    deptId: number;
    deptName: string;
    status: number;
    createdAt: string;
    updatedAt: string;
    roles?: RoleInfo[];
}

// 角色信息接口
export interface RoleInfo {
    id: number;
    name: string;
    code: string;
    status: number;
}

export type User = UserInfo;

// 当前登录用户atom
export const loginUserAtom = atom<User | null>(null);
