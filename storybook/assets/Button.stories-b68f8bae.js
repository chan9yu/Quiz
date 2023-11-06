import{j as r}from"./jsx-runtime-ffb262ed.js";import{B as e}from"./Text-841d7408.js";import{F as J}from"./Flex-83855f89.js";import"./IncorrectNoteBox-d3eb593a.js";import"./ResultChart-4711febe.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-7e430b1e.js";import"./chart-02fd948e.js";const or={title:"Components/Common/Button",component:e,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},parameters:{componentSubtitle:"Button 컴포넌트",docs:{description:{component:"사용자의 상호작용을 위한 버튼 컴포넌트 입니다."}}},decorators:[o=>r.jsx(J,{$alignItems:"center",$gap:10,children:r.jsx(o,{})})]},s={args:{children:"Button"}},t={...s,render:o=>r.jsxs(r.Fragment,{children:[r.jsx(e,{...o,$color:"primary"}),r.jsx(e,{...o,$color:"secondary"}),r.jsx(e,{...o,$color:"gray"}),r.jsx(e,{...o,$color:"info"}),r.jsx(e,{...o,$color:"error"}),r.jsx(e,{...o,$color:"success"}),r.jsx(e,{...o,$color:"warning"})]})},n={...s,render:o=>r.jsxs(r.Fragment,{children:[r.jsx(e,{...o,$loading:!0,$color:"primary"}),r.jsx(e,{...o,$loading:!0,$color:"secondary"}),r.jsx(e,{...o,$loading:!0,$color:"gray"}),r.jsx(e,{...o,$loading:!0,$color:"info"}),r.jsx(e,{...o,$loading:!0,$color:"error"}),r.jsx(e,{...o,$loading:!0,$color:"success"}),r.jsx(e,{...o,$loading:!0,$color:"warning"})]})},a={...s,render:o=>r.jsxs(r.Fragment,{children:[r.jsx(e,{...o,disabled:!0,$color:"primary"}),r.jsx(e,{...o,disabled:!0,$color:"secondary"}),r.jsx(e,{...o,disabled:!0,$color:"gray"}),r.jsx(e,{...o,disabled:!0,$color:"info"}),r.jsx(e,{...o,disabled:!0,$color:"error"}),r.jsx(e,{...o,disabled:!0,$color:"success"}),r.jsx(e,{...o,disabled:!0,$color:"warning"})]})},c={...s,render:o=>r.jsxs(r.Fragment,{children:[r.jsx(e,{...o,$size:"sm"}),r.jsx(e,{...o,$size:"md"}),r.jsx(e,{...o,$size:"lg"})]})},d={...s,render:o=>r.jsx(e,{...o,$fullWidth:!0})},i={...s,render:o=>r.jsx(e,{...o,$width:500})};var l,u,p,m,$;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"- Button 컴포넌트의 기본 상태입니다.",...($=(m=s.parameters)==null?void 0:m.docs)==null?void 0:$.description}}};var g,x,B,j,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Button {...args} $color="primary" />
            <Button {...args} $color="secondary" />
            <Button {...args} $color="gray" />
            <Button {...args} $color="info" />
            <Button {...args} $color="error" />
            <Button {...args} $color="success" />
            <Button {...args} $color="warning" />
        </>
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"- Theme Foundation에 정의한 `Color`를 사용하여 Button 컴포넌트의 색상을 변경할 수 있습니다.",...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};var b,f,h,D,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Button {...args} $loading $color="primary" />
            <Button {...args} $loading $color="secondary" />
            <Button {...args} $loading $color="gray" />
            <Button {...args} $loading $color="info" />
            <Button {...args} $loading $color="error" />
            <Button {...args} $loading $color="success" />
            <Button {...args} $loading $color="warning" />
        </>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"- 로딩 상태를 버튼 UI에 노출하기 위한 속성입니다.",...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var F,w,z,W,C;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Button {...args} disabled $color="primary" />
            <Button {...args} disabled $color="secondary" />
            <Button {...args} disabled $color="gray" />
            <Button {...args} disabled $color="info" />
            <Button {...args} disabled $color="error" />
            <Button {...args} disabled $color="success" />
            <Button {...args} disabled $color="warning" />
        </>
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"- 버튼을 비활성화 상태로 변경할 수 있는 속성입니다.",...(C=(W=a.parameters)==null?void 0:W.docs)==null?void 0:C.description}}};var E,I,L,T,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Button {...args} $size="sm" />
            <Button {...args} $size="md" />
            <Button {...args} $size="lg" />
        </>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"- 버튼의 크기를 정의할 수 있는 속성입니다.",...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var N,O,R,U,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  render: args => <Button {...args} $fullWidth />
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"- Button 컴포넌트의 너비를 부모 요소에 기준으로 꽉 채웁니다.",...(k=(U=d.parameters)==null?void 0:U.docs)==null?void 0:k.description}}};var q,v,A,G,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  render: args => <Button {...args} $width={500} />
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source},description:{story:`- Button 컴포넌트의 너비를 설정합니다.
- number만 입력하게 되면 자동으로 px 단위로 계산됩니다.`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const er=["Default","Color","Loading","Disabeld","Size","FullWidth","Width"];export{t as Color,s as Default,a as Disabeld,d as FullWidth,n as Loading,c as Size,i as Width,er as __namedExportsOrder,or as default};
//# sourceMappingURL=Button.stories-b68f8bae.js.map
