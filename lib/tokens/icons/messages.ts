import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const messages = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path fill="${color[0]}" d="M9.4,18.2l2-2.3H20V4.3H4v11.6h5.4V18.2z M2,4.3c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v11.6c0,1.1-0.9,2-2,2h-7.7
            L8.8,22c-0.2,0.2-0.4,0.2-0.6,0.2c-0.4,0-0.7-0.4-0.7-0.8l-0.1-3.5H4c-1.1,0-2-0.9-2-2V4.3z"/>
        </svg>`
}

export default messages
