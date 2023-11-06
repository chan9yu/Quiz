import{j as e}from"./jsx-runtime-ffb262ed.js";import"./Text-ed2fba2b.js";import{F as a}from"./Flex-5cfcc65c.js";import{C as t}from"./ProgressBar-e911e526.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-6bbe5efe.js";const _={title:"Components/Quiz/ChoiceItem",component:t,tags:["autodocs"],parameters:{componentSubtitle:"ChoiceItem 컴포넌트"}},o={args:{children:"첫번째 지문입니다!",prefixNumber:1,onClick:()=>alert("click test")}},c={...o,decorators:[r=>e.jsx(a,{$direction:"column",$gap:12,children:e.jsx(r,{})})],render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,prefixNumber:1,children:"Javascript"}),e.jsx(t,{...r,prefixNumber:2,children:"Python"}),e.jsx(t,{...r,prefixNumber:3,children:"C#"}),e.jsx(t,{...r,prefixNumber:4,children:"Java"})]})},s={...o,args:{...o.args,answerStatus:"correct"},decorators:[r=>e.jsx(a,{$direction:"column",$gap:12,children:e.jsx(r,{})})],render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,prefixNumber:1,selected:!0,isCorrect:!0,children:"Javascript"}),e.jsx(t,{...r,prefixNumber:2,children:"Python"}),e.jsx(t,{...r,prefixNumber:3,children:"C#"}),e.jsx(t,{...r,prefixNumber:4,children:"Java"})]})},i={...o,args:{...o.args,answerStatus:"incorrect"},decorators:[r=>e.jsx(a,{$direction:"column",$gap:12,children:e.jsx(r,{})})],render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,prefixNumber:1,isCorrect:!0,children:"Javascript"}),e.jsx(t,{...r,prefixNumber:2,selected:!0,children:"Python"}),e.jsx(t,{...r,prefixNumber:3,children:"C#"}),e.jsx(t,{...r,prefixNumber:4,children:"Java"})]})};var n,m,p,d,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: '첫번째 지문입니다!',
    prefixNumber: 1,
    onClick: () => alert('click test')
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"- ChoiceItem 컴포넌트의 기본 상태입니다.",...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var l,x,h,C,f;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <Flex $direction="column" $gap={12}>
                <Story />
            </Flex>],
  render: args => <>
            <ChoiceItem {...args} prefixNumber={1}>
                Javascript
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={2}>
                Python
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={3}>
                C#
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={4}>
                Java
            </ChoiceItem>
        </>
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"- 퀴즈에 대한 지문이 4개인 상황입니다.",...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var g,I,b,N,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    answerStatus: 'correct'
  },
  decorators: [Story => <Flex $direction="column" $gap={12}>
                <Story />
            </Flex>],
  render: args => <>
            <ChoiceItem {...args} prefixNumber={1} selected isCorrect>
                Javascript
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={2}>
                Python
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={3}>
                C#
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={4}>
                Java
            </ChoiceItem>
        </>
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source},description:{story:"- 정답을 선택할 때",...(j=(N=s.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var y,S,v,J,$;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    answerStatus: 'incorrect'
  },
  decorators: [Story => <Flex $direction="column" $gap={12}>
                <Story />
            </Flex>],
  render: args => <>
            <ChoiceItem {...args} prefixNumber={1} isCorrect>
                Javascript
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={2} selected>
                Python
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={3}>
                C#
            </ChoiceItem>
            <ChoiceItem {...args} prefixNumber={4}>
                Java
            </ChoiceItem>
        </>
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"- 오답을 선택할 때",...($=(J=i.parameters)==null?void 0:J.docs)==null?void 0:$.description}}};const z=["Default","Multiple","Correct","Incorrect"];export{s as Correct,o as Default,i as Incorrect,c as Multiple,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=ChoiceItem.stories-20268515.js.map
