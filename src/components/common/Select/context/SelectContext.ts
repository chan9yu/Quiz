import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import type { SelectData } from '../../../../@types';

interface SelectContext {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	onChange?: (data: SelectData) => void;
	selectData?: SelectData;
}

export const SelectContext = createContext<SelectContext | null>(null);

export const useSelectContext = () => {
	const context = useContext(SelectContext);
	if (!context) {
		throw new Error('Select.* 컴포넌트만 사용 가능합니다.');
	}

	return context;
};
