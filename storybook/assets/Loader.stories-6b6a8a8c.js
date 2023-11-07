import{j as r}from"./jsx-runtime-ffb262ed.js";import{L as o}from"./Text-f3f6e15e.js";import{F as D}from"./Flex-b02aa94b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-7e430b1e.js";const _={title:"Components/Common/Loader",component:o,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},parameters:{componentSubtitle:"Loader 컴포넌트",docs:{description:{component:"로딩 상태를 UI에 노출하기 위한 컴포넌트입니다."}}},decorators:[e=>r.jsx(D,{$alignItems:"center",$gap:10,children:r.jsx(e,{})})]},s={args:{}},a={...s,render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,$color:"primary"}),r.jsx(o,{...e,$color:"secondary"}),r.jsx(o,{...e,$color:"gray"}),r.jsx(o,{...e,$color:"info"}),r.jsx(o,{...e,$color:"error"}),r.jsx(o,{...e,$color:"success"}),r.jsx(o,{...e,$color:"warning"})]})},t={...s,decorators:[e=>r.jsx("div",{style:{position:"relative",width:"100%",height:"100px"},children:r.jsx(e,{})})],render:e=>r.jsx(o,{...e,$position:"absolute",style:{top:"20px",left:"20px"}})},i={...s,render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,$size:30}),r.jsx(o,{...e,$size:35}),r.jsx(o,{...e,$size:40}),r.jsx(o,{...e,$size:45}),r.jsx(o,{...e,$size:50})]})};var n,c,d,p,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"- Loader 컴포넌트의 기본 상태입니다.",...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var m,x,u,$,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Loader {...args} $color="primary" />
            <Loader {...args} $color="secondary" />
            <Loader {...args} $color="gray" />
            <Loader {...args} $color="info" />
            <Loader {...args} $color="error" />
            <Loader {...args} $color="success" />
            <Loader {...args} $color="warning" />
        </>
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"- Theme Foundation에 정의한 `Color`를 사용하여 Loader 컴포넌트의 색상을 변경할 수 있습니다.",...(g=($=a.parameters)==null?void 0:$.docs)==null?void 0:g.description}}};var j,L,y,f,h;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <div style={{
    position: 'relative',
    width: '100%',
    height: '100px'
  }}>
                <Story />
            </div>],
  render: args => <Loader {...args} $position="absolute" style={{
    top: '20px',
    left: '20px'
  }} />
}`,...(y=(L=t.parameters)==null?void 0:L.docs)==null?void 0:y.source},description:{story:"- Loader 컴포넌트에 `position`속성을 지정할 수 있습니다.",...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var z,b,S,v,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Loader {...args} $size={30} />
            <Loader {...args} $size={35} />
            <Loader {...args} $size={40} />
            <Loader {...args} $size={45} />
            <Loader {...args} $size={50} />
        </>
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:`- Loader 컴포넌트에 크기를 지정할 수 있습니다.
- number만 입력하게 되면 자동으로 px 단위로 계산됩니다.`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};const N=["Default","Color","Position","Size"];export{a as Color,s as Default,t as Position,i as Size,N as __namedExportsOrder,_ as default};
//# sourceMappingURL=Loader.stories-6b6a8a8c.js.map
