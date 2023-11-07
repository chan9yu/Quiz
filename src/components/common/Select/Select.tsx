import { HTMLAttributes, useEffect, useRef, useState } from 'react';

import type { ChildrenProps, SelectData } from '../../../@types';
import { SelectOption, SelectOptions, SelectTrigger } from './children';
import { SelectContext } from './context';
import * as S from './Select.styles';

export interface SelectProps extends ChildrenProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	onChange?: (data: SelectData) => void;
	selectData?: SelectData;
}

const Select = (props: SelectProps) => {
	const { children, onChange, selectData, ...rest } = props;

	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	const handleDocumentClick = (e: MouseEvent) => {
		if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick);
		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	return (
		<SelectContext.Provider
			value={{
				isOpen,
				setIsOpen,
				onChange,
				selectData
			}}
		>
			<S.SelectStyled ref={selectRef} role="combobox" {...rest}>
				{children}
			</S.SelectStyled>
		</SelectContext.Provider>
	);
};

Select.Option = SelectOption;
Select.Options = SelectOptions;
Select.Trigger = SelectTrigger;

export default Select;
