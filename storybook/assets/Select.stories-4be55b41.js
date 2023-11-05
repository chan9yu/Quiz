import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{S as t}from"./Text-3f76fd2a.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-6bbe5efe.js";import"./Flex-5cfcc65c.js";import"./Modal-47b4643f.js";const D={title:"Components/Common/Select",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{componentSubtitle:"Select 컴포넌트",docs:{description:{component:"컴파운드 컴포넌트 패턴으로 구현된 Select 컴포넌트입니다."}}},decorators:[l=>e.jsx("div",{style:{height:"250px"},children:e.jsx(l,{})})]},a={render:l=>{const[i,p]=m.useState({value:"5",label:"5문제"}),u=S=>p(S);return e.jsxs(t,{...l,selectData:i,onChange:u,children:[e.jsx(t.Trigger,{selectLabel:"질문 수를 선택해주세요! (최대 10문제)"}),e.jsxs(t.Options,{children:[e.jsx(t.Option,{value:"5",label:"5문제"}),e.jsx(t.Option,{value:"6",label:"6문제"}),e.jsx(t.Option,{value:"7",label:"7문제"}),e.jsx(t.Option,{value:"8",label:"8문제"}),e.jsx(t.Option,{value:"9",label:"9문제"}),e.jsx(t.Option,{value:"10",label:"10문제"})]})]})}};var s,o,r,c,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [selectData, setSelectData] = useState<SelectData>({
      value: '5',
      label: '5문제'
    });
    const onChange = (data: SelectData) => setSelectData(data);
    return <Select {...args} selectData={selectData} onChange={onChange}>
                <Select.Trigger selectLabel="질문 수를 선택해주세요! (최대 10문제)" />
                <Select.Options>
                    <Select.Option value="5" label="5문제" />
                    <Select.Option value="6" label="6문제" />
                    <Select.Option value="7" label="7문제" />
                    <Select.Option value="8" label="8문제" />
                    <Select.Option value="9" label="9문제" />
                    <Select.Option value="10" label="10문제" />
                </Select.Options>
            </Select>;
  }
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source},description:{story:"- Select 컴포넌트의 사용예시입니다.",...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.description}}};const h=["Default"];export{a as Default,h as __namedExportsOrder,D as default};
//# sourceMappingURL=Select.stories-4be55b41.js.map
