import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Tempor irure in culpa ut ut deserunt esse qui. Veniam id ullamco incididunt est est laborum aute qui. Exercitation officia esse labore et id sint culpa velit minim aliqua.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Eiusmod dolor dolore pariatur tempor occaecat sit aute non consectetur nulla labore incididunt duis laborum do.","spans":[]}],"reference":[{"type":"paragraph","text":"Amet amet reprehenderit esse ad elit ad ea et pariatur consequat.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
