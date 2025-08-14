import { createStyles } from 'antd-style';

export const useLoginStyles = createStyles(({ css }) => ({
    container: css`
        display: flex;
        min-height: 100vh;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }
    `,
    
    leftPanel: css`
        flex: 1;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        position: relative;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E");
        }
        
        @media (max-width: 768px) {
            min-height: 40vh;
            padding: 30px 20px;
        }
    `,
    
    brandSection: css`
        text-align: center;
        color: white;
        z-index: 1;
        position: relative;
    `,
    
    logo: css`
        margin-bottom: 24px;
    `,
    
    logoIcon: css`
        font-size: 64px;
        color: white;
        opacity: 0.9;
        
        @media (max-width: 768px) {
            font-size: 48px;
        }
    `,
    
    brandTitle: css`
        color: white !important;
        margin-bottom: 12px !important;
        font-weight: 700;
        font-size: 28px;
        
        @media (max-width: 768px) {
            font-size: 24px;
        }
    `,
    
    brandSubtitle: css`
        color: rgba(255, 255, 255, 0.8) !important;
        font-size: 16px;
        display: block;
        
        @media (max-width: 768px) {
            font-size: 14px;
        }
    `,
    
    rightPanel: css`
        flex: 1;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        
        @media (max-width: 768px) {
            padding: 30px 20px;
        }
    `,
    
    formWrapper: css`
        width: 100%;
        max-width: 400px;
    `,
    
    formHeader: css`
        text-align: center;
        margin-bottom: 40px;
        
        @media (max-width: 768px) {
            margin-bottom: 30px;
        }
    `,
    
    formTitle: css`
        color: #1f2937 !important;
        margin-bottom: 8px !important;
        font-weight: 600;
    `,
    
    formSubtitle: css`
        color: #6b7280 !important;
        font-size: 14px;
    `,
    
    form: css`
        
    `,
    
    formItem: css`
        margin-bottom: 20px;
        
        .ant-form-item-label > label {
            font-weight: 500;
            color: #374151;
            font-size: 14px;
        }
    `,
    
    input: css`
        border-radius: 8px;
        border: 1px solid #d1d5db;
        transition: all 0.2s ease;
        
        &:hover {
            border-color: #667eea;
        }
        
        &:focus, &.ant-input-focused {
            border-color: #667eea;
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
        }
    `,
    
    inputIcon: css`
        color: #9ca3af;
    `,
    
    formOptions: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    `,
    
    checkboxItem: css`
        margin-bottom: 0 !important;
        
        .ant-form-item-control-input {
            min-height: auto;
        }
    `,
    
    checkbox: css`
        .ant-checkbox-checked .ant-checkbox-inner {
            background-color: #667eea;
            border-color: #667eea;
        }
        
        .ant-checkbox:hover .ant-checkbox-inner {
            border-color: #667eea;
        }
        
        .ant-checkbox + span {
            color: #374151;
        }
    `,
    
    forgotLink: css`
        color: #667eea;
        font-size: 14px;
        text-decoration: none;
        
        &:hover {
            color: #5a6fd8;
            text-decoration: underline;
        }
    `,
    
    submitItem: css`
        margin-bottom: 0;
    `,
    
    submitButton: css`
        height: 48px;
        border-radius: 8px;
        background-color: #667eea;
        border-color: #667eea;
        font-weight: 500;
        font-size: 16px;
        
        &:hover {
            background-color: #5a6fd8;
            border-color: #5a6fd8;
        }
        
        &:active, &:focus {
            background-color: #4f63d0;
            border-color: #4f63d0;
        }
    `,
}));