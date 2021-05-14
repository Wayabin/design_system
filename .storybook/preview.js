
import React from 'react';
import './design.system.universe.scss';

export const parameters = {

	viewport: {
		viewports: {
			
			mobile: {
				name: 'Mobile (540)',
				styles: {
					width: '540px',
					height: '768px',
				},
				type: 'mobile',
			},
			
			desktop: {
				name: 'Desktop (1024)',
				styles: {
					width: '1024px',
					height: '768px',
				},
				type: 'tablet',
			}
		},
	},

	options: {
		// showRoots: true,
		
		storySort: (a, b) => {
			// console.log(a)
			// const result = itemA.id.localeCompare(itemB.id, undefined, { numeric: true });
			// console.log(`${itemA.id} < ${itemB.id} ? ${result}`);
			const itemA = a[1];
			const itemB = b[1];
			const paramsA = a[2];
			const paramsB = b[2];

			return itemA.kind === itemB.kind ? 0 : 
				paramsA.position && paramsB.position ?
					paramsA.position.localeCompare(paramsB.position, undefined, { numeric: true }) :
					itemA.kind.localeCompare(itemB.kind, undefined, { numeric: true })
		}
	}
};


export const decorators = [
	(Story) => (
				<Story />
	),
];
