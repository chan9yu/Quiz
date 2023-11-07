import{j as s}from"./jsx-runtime-ffb262ed.js";import{s as me,n as ge}from"./styled-components.browser.esm-7e430b1e.js";import{F as a}from"./Flex-b02aa94b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const pe=me.div.withConfig({displayName:"Flexstories__Item",componentId:"sc-wng4hw-0"})(["width:100px;height:45px;border-radius:4px;display:flex;justify-content:center;align-items:center;&::before{content:'Item';}",""],({theme:e})=>ge(["background-color:",";color:",";font-size:",";"],e.color.primary[500],e.color.gray[50],e.typography.size[200])),Fe={title:"Components/Common/Flex",component:a,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},parameters:{componentSubtitle:"Flex 컴포넌트",docs:{description:{component:"`display: flex` 속성을 지원하는 컴포넌트로 레이아웃 구성을 쉽게 할 수 있는 컴포넌트입니다."}}}},r={args:{children:Array.from({length:4}).map((e,g)=>s.jsx(pe,{},g)),$gap:8}},t={...r,render:e=>s.jsx(a,{...e,tag:"main"})},o={...r,render:e=>s.jsx(a,{...e,$justifyContent:"center"})},n={...r,render:e=>s.jsx(a,{...e,$alignItems:"center",$height:200})},c={...r,render:e=>s.jsx(a,{...e,$direction:"column"})},i={...r,render:e=>s.jsx(a,{...e,$gap:20})},d={...r,render:e=>s.jsx(a,{...e,$flexGrow:"1"})},p={...r,decorators:[e=>s.jsx("div",{style:{width:"240px"},children:s.jsx(e,{})})],render:e=>s.jsx(a,{...e,$flexWrap:"wrap"})},l={...r,render:e=>s.jsx(a,{...e,$fullWidth:!0,style:{background:"#eaeaea"},children:Array.from({length:8}).map((g,le)=>s.jsx(pe,{},le))})},m={...r,render:e=>s.jsx(a,{...e,$width:600,$height:200,style:{background:"#eaeaea"}})};var u,x,f,y,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 4
    }).map((_, i) => <Item key={i} />),
    $gap: 8
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"- Flex 컴포넌트의 기본 상태입니다.",...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var F,$,j,w,b;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} tag="main" />
}`,...(j=($=t.parameters)==null?void 0:$.docs)==null?void 0:j.source},description:{story:"- 기본적으로 Flex 컴포넌트는 `div` 태그로 렌더링이 됩니다.\n- 필요한 경우 tag라는 속성을 이용해서 원하는 html tag로 렌더링할 수 있습니다.",...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var D,S,I,W,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $justifyContent="center" />
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:"- flex의 `justify-content`을 제공하는 속성입니다.\n- 기본적으로 `flex-start` 가 적용됩니다.",...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var _,k,C,G,v;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $alignItems="center" $height={200} />
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"- flex의 `align-items`을 제공하는 속성입니다.\n- 기본적으로 `flex-start` 가 적용됩니다.",...(v=(G=n.parameters)==null?void 0:G.docs)==null?void 0:v.description}}};var T,z,E,H,J;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $direction="column" />
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source},description:{story:"- 기본적으로 Flex 컴포넌트는 항목을 열에 가로로 정렬합니다.\n- `direction` 속성을 이용해서 연속적으로 세로로 배치하게 할 수 있습니다.",...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var N,O,R,q,B;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $gap={20} />
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"- flex의 `gap`을 제공하는 속성입니다.\n- number만 입력하게 되면 자동으로 px 단위로 계산됩니다.",...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};var K,L,M,P,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $flexGrow="1" />
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"- flex의 `flex-grow`을 제공하는 속성입니다.\n- 기본적으로 `0` 값으로 설정되어 있습니다.",...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var U,V,X,Y,Z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <div style={{
    width: '240px'
  }}>
                <Story />
            </div>],
  render: args => <Flex {...args} $flexWrap="wrap" />
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"- flex의 `flex-wrap`을 제공하는 속성입니다.\n- 기본적으로 `nowrap` 값으로 설정되어 있습니다.",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,re,se,ae,te;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $fullWidth style={{
    background: '#eaeaea'
  }}>
            {Array.from({
      length: 8
    }).map((_, i) => <Item key={i} />)}
        </Flex>
}`,...(se=(re=l.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"- Flex 컴포넌트의 너비를 부모 요소에 기준으로 꽉 채웁니다.",...(te=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var oe,ne,ce,ie,de;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Default,
  render: args => <Flex {...args} $width={600} $height={200} style={{
    background: '#eaeaea'
  }} />
}`,...(ce=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:`- Flex 컴포넌트의 높이와 너비를 설정합니다.
- number만 입력하게 되면 자동으로 px 단위로 계산됩니다.`,...(de=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};const $e=["Default","Tag","JustifyContent","AlignItems","Direction","Gap","FlexGrow","FlexWrap","FullWidth","WidthAndHeight"];export{n as AlignItems,r as Default,c as Direction,d as FlexGrow,p as FlexWrap,l as FullWidth,i as Gap,o as JustifyContent,t as Tag,m as WidthAndHeight,$e as __namedExportsOrder,Fe as default};
//# sourceMappingURL=Flex.stories-bba78dd5.js.map
