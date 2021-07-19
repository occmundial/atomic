import colors from '../colors'
import spacing from '../spacing'

const upload = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M18.4,8c-0.7-2.4-2.6-5.3-6.4-5.3c-3.6,0-5.4,1.9-6,3.8C4,7.1,1.8,8.8,1.8,12c0,2.6,1.4,4.6,3.8,5.6
        	c1.6,0.7,3.2,0.7,3.4,0.7h0.4v-2H9c0,0-5.2,0-5.2-4.3c0-3.5,3.9-3.9,3.9-3.9s0-3.5,4.3-3.5s4.8,5.2,4.8,5.2s0.1,0,0.4,0
        	c0.9,0,3.1,0.3,3.1,3.1c0,3.5-5.2,3.5-5.2,3.5h-0.9v2H15c3.5,0,7.2-1.7,7.2-5.5C22.2,10,20.5,8.4,18.4,8z"/>
        <path fill="${color[0]}" d="M15.1,11.8L12.5,9l0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0-0.1,0l0,0c-0.1,0-0.2-0.1-0.3-0.1h-0.1c-0.1,0-0.2,0-0.3,0h-0.1
        	c-0.1,0-0.2,0.1-0.2,0.1s0,0-0.1,0l0,0l0,0l-2.8,2.9c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l1.1-1.1v8.3c0,0.6,0.4,1,1,1
        	s1-0.4,1-1v-8.2l0.9,0.9c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C15.5,12.8,15.5,12.2,15.1,11.8z"/>
        </svg>`
}

export default upload
