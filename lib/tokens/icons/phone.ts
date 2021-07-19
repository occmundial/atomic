import colors from '../colors'
import spacing from '../spacing'

const phone = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
		<path fill="${color[0]}" d="M19.4,22.3c-3.1-0.3-6.2-1.4-8.6-3c-2.5-1.7-4.5-3.7-5.9-5.9c-1.7-2.6-2.7-5.5-3-8.6c0-0.9,0.2-1.6,0.7-2.1
			C3.1,2,3.8,1.8,4.5,1.8h2.9c1.4,0,2.5,1,2.6,2.3c0,1,0.2,1.8,0.5,2.4c0.4,1,0.2,2.1-0.5,2.9l-0.9,0.8c1.1,1.9,2.7,3.5,4.6,4.6
			l0.8-0.8c0.7-0.7,1.9-1,2.8-0.6c0.8,0.3,1.6,0.5,2.5,0.7c1.3,0.1,2.3,1.3,2.3,2.6v2.9c0,0.7-0.3,1.4-0.8,1.9
			C20.8,22.2,20,22.3,19.4,22.3z M4.5,3.3c-0.3,0-0.6,0.1-0.9,0.4c-0.2,0.2-0.3,0.5-0.3,1c0.3,2.8,1.2,5.5,2.8,7.9
			c1.3,2.1,3.1,3.9,5.5,5.5c2.3,1.5,5,2.5,7.9,2.8c0.5,0,0.7-0.1,0.9-0.3c0.2-0.2,0.4-0.6,0.4-0.9v-2.9c0-0.5-0.4-1.1-1-1.2l-0.1,0
			c-0.9-0.2-1.8-0.4-2.7-0.7c-0.4-0.2-0.9-0.1-1.2,0.2l-1.3,1.3h-0.7l-0.2-0.1c-2.3-1.3-4.2-3.2-5.6-5.4H7.8l-0.3-0.5
			c-0.1-0.3,0-0.7,0.2-1L9,8.2C9.3,8,9.4,7.5,9.2,7.1c-0.4-0.9-0.7-1.9-0.7-3C8.5,3.7,8,3.3,7.4,3.3H4.5z"/>
		</svg>`
}

export default phone
