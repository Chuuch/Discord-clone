'use client';

interface FileUploadProps {
	endpoint: 'messageFile' | 'serverImage';
	onChange: (url?: string) => void;
	value: string;
}

export const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
	return <div>File Upload Component</div>;
};
