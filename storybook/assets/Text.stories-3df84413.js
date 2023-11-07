import{j as e}from"./jsx-runtime-ffb262ed.js";import{T as o}from"./Text-f3f6e15e.js";import{F as A}from"./Flex-b02aa94b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-7e430b1e.js";const M={title:"Components/Common/Text",component:o,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},parameters:{componentSubtitle:"Text 컴포넌트",docs:{description:{component:"Typography 파운데이션 지정 값을 기준으로 만들어진 Text 컴포넌트입니다."}}},decorators:[r=>e.jsx(A,{$direction:"column",$gap:10,children:e.jsx(r,{})})]},s={args:{children:"Text Component"}},t={...s,render:r=>e.jsx(o,{...r,tag:"h2"})},a={...s,render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,$color:"gray"}),e.jsx(o,{...r,$color:"primary",$colorLevel:"500"}),e.jsx(o,{...r,$color:"secondary",$colorLevel:"500"}),e.jsx(o,{...r,$color:"info",$colorLevel:"500"}),e.jsx(o,{...r,$color:"error",$colorLevel:"500"}),e.jsx(o,{...r,$color:"warning",$colorLevel:"500"}),e.jsx(o,{...r,$color:"success",$colorLevel:"500"})]})},c={...s,render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,$color:"gray",$colorLevel:"50"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"100"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"200"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"300"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"400"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"500"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"600"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"700"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"800"}),e.jsx(o,{...r,$color:"gray",$colorLevel:"900"})]})},l={...s,render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,$size:"50"}),e.jsx(o,{...r,$size:"75"}),e.jsx(o,{...r,$size:"100"}),e.jsx(o,{...r,$size:"200"}),e.jsx(o,{...r,$size:"300"}),e.jsx(o,{...r,$size:"400"}),e.jsx(o,{...r,$size:"500"}),e.jsx(o,{...r,$size:"600"}),e.jsx(o,{...r,$size:"700"}),e.jsx(o,{...r,$size:"800"}),e.jsx(o,{...r,$size:"900"})]})},n={...s,render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,$weight:"regular"}),e.jsx(o,{...r,$weight:"medium"}),e.jsx(o,{...r,$weight:"bold"})]})};var i,$,x,d,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Text Component'
  }
}`,...(x=($=s.parameters)==null?void 0:$.docs)==null?void 0:x.source},description:{story:"- Text 컴포넌트의 기본 상태입니다.",...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.description}}};var m,p,T,u,j;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  render: args => <Text {...args} tag="h2" />
}`,...(T=(p=t.parameters)==null?void 0:p.docs)==null?void 0:T.source},description:{story:"- 기본적으로 Text 컴포넌트는 `span` 태그로 렌더링이 됩니다.\n- 필요한 경우 tag라는 속성을 이용해서 원하는 html tag로 렌더링할 수 있습니다.",...(j=(u=t.parameters)==null?void 0:u.docs)==null?void 0:j.description}}};var y,v,L,z,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Text {...args} $color="gray" />
            <Text {...args} $color="primary" $colorLevel="500" />
            <Text {...args} $color="secondary" $colorLevel="500" />
            <Text {...args} $color="info" $colorLevel="500" />
            <Text {...args} $color="error" $colorLevel="500" />
            <Text {...args} $color="warning" $colorLevel="500" />
            <Text {...args} $color="success" $colorLevel="500" />
        </>
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source},description:{story:"- Theme Foundation에 정의한 `Color`를 사용하여 Text 컴포넌트의 색상을 변경할 수 있습니다.",...(h=(z=a.parameters)==null?void 0:z.docs)==null?void 0:h.description}}};var f,C,S,b,F;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Text {...args} $color="gray" $colorLevel="50" />
            <Text {...args} $color="gray" $colorLevel="100" />
            <Text {...args} $color="gray" $colorLevel="200" />
            <Text {...args} $color="gray" $colorLevel="300" />
            <Text {...args} $color="gray" $colorLevel="400" />
            <Text {...args} $color="gray" $colorLevel="500" />
            <Text {...args} $color="gray" $colorLevel="600" />
            <Text {...args} $color="gray" $colorLevel="700" />
            <Text {...args} $color="gray" $colorLevel="800" />
            <Text {...args} $color="gray" $colorLevel="900" />
        </>
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"- `Color`의 가중치를 변경할 수 있습니다.",...(F=(b=c.parameters)==null?void 0:b.docs)==null?void 0:F.description}}};var w,D,W,E,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Text {...args} $size="50" />
            <Text {...args} $size="75" />
            <Text {...args} $size="100" />
            <Text {...args} $size="200" />
            <Text {...args} $size="300" />
            <Text {...args} $size="400" />
            <Text {...args} $size="500" />
            <Text {...args} $size="600" />
            <Text {...args} $size="700" />
            <Text {...args} $size="800" />
            <Text {...args} $size="900" />
        </>
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source},description:{story:"- Theme Foundation에 정의한 `Size`를 사용하여 Text 컴포넌트의 크기를 변경할 수 있습니다.",...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var N,O,R,k,q;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  render: args => <>
            <Text {...args} $weight="regular" />
            <Text {...args} $weight="medium" />
            <Text {...args} $weight="bold" />
        </>
}`,...(R=(O=n.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"- Theme Foundation에 정의한 `Weight`를 사용하여 Text 컴포넌트의 굵기 정도를 변경할 수 있습니다.",...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.description}}};const P=["Default","Tag","Color","ColorLevel","Size","Weight"];export{a as Color,c as ColorLevel,s as Default,l as Size,t as Tag,n as Weight,P as __namedExportsOrder,M as default};
//# sourceMappingURL=Text.stories-3df84413.js.map
