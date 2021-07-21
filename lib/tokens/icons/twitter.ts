import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const twitter = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M9,19.5c-2.1,0-4.2-0.6-6.1-1.7l-2.8-1.6l3.2,0.2c1.3,0.1,2.7-0.2,3.9-0.8c-1.6-1-2.8-2.3-3.4-3.9C2.6,8.4,4.1,5.1,4.1,5
        	l0.5-1.2l0.8,1C6.8,6.8,8.9,8,11.1,8.1v0c0-1.9,1.1-3.5,2.8-4.1c1.5-0.5,3.1-0.2,4.3,0.8c0.6-0.2,1.3-0.6,1.9-1L21.6,3l-0.3,1.7
        	c-0.2,1.1-0.7,2.1-1.5,3c0,0.2,0,0.3,0,0.5c0,4.3-1.9,8-5.3,9.9C12.9,19,11,19.5,9,19.5z M6.2,17.6c2.6,0.7,5.3,0.4,7.6-0.9
        	c2.9-1.7,4.5-4.8,4.5-8.6c0-0.2,0-0.3-0.1-0.5l-0.1-0.4l0.3-0.3c0.2-0.2,0.4-0.5,0.6-0.7c-0.3,0.1-0.5,0.2-0.8,0.3l-0.5,0.2
        	l-0.3-0.4c-0.8-0.9-2-1.2-3.1-0.8c-1.1,0.4-1.8,1.5-1.8,2.7v1.5l-0.7,0c-2.5,0.1-5-1-6.8-2.8C4.9,7.5,4.8,8.3,4.9,9.3
        	c0.1,2.6,1.6,4.5,4.3,5.6l1.2,0.5l-1.1,0.8C8.3,16.8,7.3,17.3,6.2,17.6z"/>
        </svg>`
}

export default twitter
