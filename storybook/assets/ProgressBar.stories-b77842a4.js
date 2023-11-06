import{j as r}from"./jsx-runtime-ffb262ed.js";import"./Text-ed2fba2b.js";import{F as l}from"./Flex-5cfcc65c.js";import{P as s}from"./ProgressBar-e911e526.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-6bbe5efe.js";const $={title:"Components/Quiz/ProgressBar",component:s,tags:["autodocs"],parameters:{componentSubtitle:"ProgressBar 컴포넌트"}},o={args:{percent:0}},t={...o,decorators:[e=>r.jsx(l,{$direction:"column",$gap:12,children:r.jsx(e,{})})],render:e=>r.jsxs(r.Fragment,{children:[r.jsx(s,{...e}),r.jsx(s,{...e,percent:20}),r.jsx(s,{...e,percent:40}),r.jsx(s,{...e,percent:60}),r.jsx(s,{...e,percent:80}),r.jsx(s,{...e,percent:100})]})};var n,a,c,p,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    percent: 0
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:"- ProgressBar 컴포넌트의 기본 상태입니다.",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var i,d,g,u,x;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <Flex $direction="column" $gap={12}>
                <Story />
            </Flex>],
  render: args => <>
            <ProgressBar {...args} />
            <ProgressBar {...args} percent={20} />
            <ProgressBar {...args} percent={40} />
            <ProgressBar {...args} percent={60} />
            <ProgressBar {...args} percent={80} />
            <ProgressBar {...args} percent={100} />
        </>
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source},description:{story:"- percent 속성을 이용해 ProgressBar 컴포넌트의 UI를 변경하여 사용자에게 진행상황을 쉽게 알려줄 수 있습니다.\n- `0 ~ 100 사이에 숫자만` 입력가능합니다.",...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const D=["Default","Percent"];export{o as Default,t as Percent,D as __namedExportsOrder,$ as default};
//# sourceMappingURL=ProgressBar.stories-b77842a4.js.map
