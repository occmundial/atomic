import colors from '../colors'

const icon = color =>
  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 180 100" style="enable-background:new 0 0 180 100;" xml:space="preserve">
	<path fill="${color}" d="M18.6,91c0,4.9-3.3,8.8-8.8,8.8S1,95.8,1,91s3.4-8.8,8.7-8.8C15.1,82.2,18.6,86.2,18.6,91z M5.2,91
		c0,2.6,1.5,5,4.6,5s4.6-2.4,4.6-5c0-2.5-1.8-5-4.6-5C6.8,86,5.2,88.5,5.2,91z"/>
	<path fill="${color}" d="M29.4,100c-4.9,0-9-3-9-9s4.1-9,9-9c2.4,0,4.2,0.7,6.1,2.5l-2.6,2.8c-1-0.9-2.2-1.3-3.4-1.3
		c-2.8,0-4.9,2.1-4.9,5c0,3.2,2.2,5,4.8,5c1.3,0,2.7-0.4,3.7-1.4l2.8,2.8C34,99.2,31.9,100,29.4,100z"/>
	<path fill="${color}" d="M45.8,100c-4.9,0-9-3-9-9s4.1-9,9-9c2.4,0,4.2,0.7,6.1,2.5l-2.6,2.8c-1-0.9-2.2-1.3-3.4-1.3
		C43,86,41,88.1,41,91c0,3.2,2.2,5,4.8,5c1.3,0,2.7-0.4,3.7-1.4l2.8,2.8C50.3,99.2,48.3,100,45.8,100z"/>
	<path fill="${color}" d="M65.4,90.4c0-2.2-1.2-4.3-3.5-4.3c-2.3,0-3.6,2-3.6,4.3v9.1h-4.2v-17H58l0.3,2.1c0.9-1.7,2.8-2.3,4.5-2.3
		c2,0,4,0.8,5,3.2c1.5-2.4,3.5-3.1,5.7-3.1c4.8,0,7.2,3,7.2,8v9.1h-4.2v-9.1c0-2.2-0.9-4.1-3.2-4.1c-2.3,0-3.7,2-3.7,4.2v9.1h-4.2
		C65.4,99.6,65.4,90.4,65.4,90.4z"/>
	<path fill="${color}" d="M88.4,91.4c0,2.6,1.4,4.5,4.1,4.5c2.6,0,4.3-2.2,4.3-4.7v-8.7h4.1v17h-3.7l-0.3-2.3c-1.7,1.7-3.4,2.5-5.7,2.5
		c-4,0-7-3.1-7-8.3v-8.9h4.2V91.4z"/>
	<path fill="${color}" d="M117,90.6c0-2.6-1.4-4.5-4.1-4.5c-2.6,0-4.3,2.2-4.3,4.7v8.7h-4.1v-17h3.7l0.3,2.3c1.7-1.7,3.4-2.5,5.5-2.5
		c4,0,7.2,3,7.2,8.3v8.9H117V90.6z"/>
	<path fill="${color}" d="M142.4,99.5h-3.9l-0.3-2.3c-1.3,2-3.4,2.7-5.4,2.7c-5,0-8.7-3.3-8.7-8.9c0-5.8,3.7-8.9,8.6-8.9
		c1.8,0,4.6,1,5.5,2.7v-9.4h4.2L142.4,99.5L142.4,99.5z M128.2,91c0,3,2.1,5,4.8,5c2.6,0,4.9-1.9,4.9-5c0-3-2.3-5-4.9-5
		C130.3,86,128.2,87.9,128.2,91z"/>
	<path fill="${color}" d="M148.1,75.3c1.2,0,2.5,0.8,2.5,2.4s-1.2,2.4-2.5,2.4s-2.5-0.8-2.5-2.4C145.6,76.1,146.8,75.3,148.1,75.3z
		 M146,99.5h4.2v-17H146V99.5z"/>
	<path fill="${color}" d="M171.3,82.5v17h-3.9l-0.2-2.5c-1,2-3.7,3-5.5,3c-5,0-8.6-3.1-8.6-9c0-5.8,3.8-8.9,8.7-8.9c2.3,0,4.5,1,5.4,2.8
		l0.1-2.3L171.3,82.5L171.3,82.5z M157.2,91c0,3.2,2.2,5.2,5,5.2c3.3,0,4.9-2.6,4.9-5.2c0-2.5-1.6-5.1-4.9-5.1
		C159.4,85.9,157.2,87.8,157.2,91z"/>
	<path fill="${color}" d="M179,99.5h-4.1v-24h4.1V99.5z"/>
	<path fill="${color}" d="M108.2,23.6l8.2-1.5c0,0,1.6-0.2,3.5-1.5l6.4-4.9c0,0,1-1-1.2-1.2l-9.6-0.6c0,0-0.7,0-0.8,0.7
		c0,0,0.2,1.2-1.1,2.4l-6.4,6.4C107.3,23.4,107.2,23.7,108.2,23.6z"/>
	<path fill="${color}" d="M103.1,18.4l1.5-8.2c0,0,0.2-1.6,1.5-3.5l4.9-6.4c0,0,1-1,1.2,1.2l0.6,9.6c0,0,0,0.6-0.7,0.8
		c0,0-1.2-0.2-2.4,1.1l-6.4,6.4C103.3,19.3,103,19.4,103.1,18.4z"/>
	<path fill="${color}" d="M108.6,22.8c-0.1-0.1-0.2-0.2-0.3-0.4l-0.7,0.7l0,0l-2.5,2.5c-0.4,0.4-0.4,0.9-0.1,1.3
		c3.8,5.1,5.6,11.7,4.3,18.7C107.5,56,99.1,64,88.6,65.4c-15.8,2.1-29.2-11-27.5-26.7c1.1-10.2,10.4-19.9,20.5-21.4
		c6.8-1,13.1,0.8,18.1,4.4c0.4,0.3,1,0.3,1.3-0.1l3.2-3.2l0,0c-0.1-0.1-0.3-0.2-0.4-0.3c-6.3-5-14.8-7.5-23.8-6
		c-12.2,2.1-21.8,11.7-24,23.8c-3.6,20.5,14,38.2,34.6,34.6c12.2-2.1,21.8-11.8,24-23.9C116.2,37.6,113.6,29.1,108.6,22.8z"/>
	<path fill="${color}" d="M99.8,30.9l-2.4,2.4c-0.3,0.3-0.4,0.8-0.2,1.2c1.3,2.2,1.9,4.8,1.8,7.5c-0.3,6.8-5.7,12.3-12.4,12.9
		c-8.5,0.8-15.7-6.3-14.9-14.9c0.6-6.7,6.2-12.1,12.9-12.4c2.7-0.1,5.3,0.5,7.5,1.8c0.4,0.2,0.9,0.2,1.2-0.2l2.4-2.4
		c0.5-0.5,0.4-1.2-0.2-1.6c-3.2-2-7-3.1-11.1-3C74.3,22.7,66.3,31,66.2,41.1c-0.1,10.6,8.6,19.2,19.2,19.1c10.1,0,18.5-8.1,19-18.2
		c0.2-4.1-0.9-7.9-3-11.1C101,30.5,100.3,30.4,99.8,30.9z"/>
	<path fill="${color}" d="M92.1,38.2L89,39.6c-0.4,0.2-0.7,0.7-0.6,1.2c0.1,0.4,0.1,0.8,0,1.2c-0.3,1.2-1.3,2.2-2.6,2.4
		c-2.2,0.4-4.1-1.5-3.7-3.7c0.2-1.3,1.2-2.3,2.4-2.5c0.4-0.1,0.9-0.1,1.3,0c0.5,0.1,0.9-0.1,1.1-0.6l1.4-3.1c0.3-0.6,0-1.2-0.6-1.4
		c-1.2-0.4-2.6-0.5-4-0.3c-3.7,0.6-6.6,3.7-7,7.4c-0.6,5.2,3.6,9.7,8.7,9.6c4.3-0.1,7.9-3.5,8.3-7.8c0.1-1.1,0-2.2-0.3-3.2
		C93.3,38.2,92.7,38,92.1,38.2z"/>
	</svg>`

const sharedProperties = {
  width: 90,
  height: 50,
  display: 'inline-block'
}

export const occVerticalGrey = {
  ...sharedProperties,
  icon: () => icon(colors.inkLight)
}

export const occVerticalWhite = {
  ...sharedProperties,
  icon: () => icon(colors.white)
}

export const occVerticalBlue = {
  ...sharedProperties,
  icon: () => icon(colors.brand)
}