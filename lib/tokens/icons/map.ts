import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const map = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M10,8.5c0,0.9,0.7,1.7,1.5,1.7c0.9,0,1.6-0.7,1.6-1.7c0-0.9-0.7-1.6-1.6-1.6C10.7,7,10,7.7,10,8.5z M8,8.5
            C8,6.6,9.6,5,11.5,5c2,0,3.6,1.5,3.6,3.6c0,2-1.6,3.7-3.6,3.7C9.6,12.2,8,10.5,8,8.5z"/>
        <path fill="${color[0]}" d="M4,8.4C4,4.3,7.3,1,11.5,1C15.6,1,19,4.3,19,8.4c0,1.8-0.7,3.5-2.2,5.7c-0.2,0.3-0.3,0.4-0.6,0.9
            c-0.1,0.2-0.3,0.4-0.4,0.6c-1.4,2-2.4,4.3-3.1,6.9c-0.1,0.4-0.4,0.7-0.8,0.9c-0.6,0.2-1.3-0.2-1.5-0.8c-0.7-2.6-1.8-5-3.1-6.9
            L6.8,15c-1.3-1.8-1.8-2.5-2.2-3.4C4.2,10.6,4,9.6,4,8.4z M14.1,14.4c0.1-0.2,0.3-0.4,0.4-0.6c0.3-0.4,0.4-0.6,0.6-0.9
            c1.3-1.9,1.9-3.2,1.9-4.5c0-3-2.5-5.4-5.5-5.4C8.4,3,6,5.4,6,8.4c0,0.9,0.2,1.6,0.5,2.4c0.3,0.7,0.7,1.3,2,3.1l0.4,0.5
            c1.1,1.5,1.9,3.3,2.6,5.1C12.2,17.7,13.1,16,14.1,14.4z"/>
        </svg>`
}

export default map
