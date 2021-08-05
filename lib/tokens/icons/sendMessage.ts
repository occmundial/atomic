import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const sendMessage = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M5.8,20.7c-0.5,0-1-0.1-1.4-0.4c-0.7-0.5-1.1-1.3-1.1-2.1v-3.4c0-1.3,0.9-2.3,2.1-2.5L6.6,12l-1.3-0.2
        	c-1.2-0.2-2.1-1.3-2.1-2.5l0-3.4c0-0.9,0.4-1.7,1.1-2.2C5,3.2,5.9,3.2,6.7,3.5l0,0l14.9,6.1c1,0.4,1.6,1.3,1.6,2.4
        	c0,1.1-0.6,2-1.6,2.4L6.8,20.5C6.4,20.6,6.1,20.7,5.8,20.7z M5.7,5.3c-0.2,0-0.3,0.1-0.3,0.1C5.3,5.5,5.1,5.6,5.1,5.9l0,3.4
        	c0,0.3,0.2,0.5,0.5,0.5l6.5,1.1c0.5,0.1,0.9,0.5,0.9,1.1s-0.4,1-0.9,1.1l-6.5,1.1c-0.3,0-0.5,0.3-0.5,0.6v3.4c0,0.3,0.2,0.4,0.3,0.5
        	c0.1,0.1,0.3,0.2,0.5,0.1l14.8-6.1c0.3-0.1,0.4-0.4,0.4-0.5c0-0.1,0-0.4-0.4-0.5L5.9,5.3C5.8,5.3,5.8,5.3,5.7,5.3z M11.8,11.1
        	C11.8,11.1,11.8,11.1,11.8,11.1L11.8,11.1z"/>
        </svg>`
}

export default sendMessage
