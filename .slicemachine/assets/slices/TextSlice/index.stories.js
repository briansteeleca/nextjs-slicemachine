import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ut Lorem ex ad duis pariatur ullamco aute laborum nisi in aliquip.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ullamco incididunt magna consequat id laborum duis sint aliquip exercitation culpa qui sit. Ut tempor culpa occaecat nulla magna dolor pariatur eu eu cillum sunt deserunt.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
