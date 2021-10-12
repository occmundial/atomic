import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const hourGlass = {
  width: spacing.base,
  height: spacing.base,
  display: 'inline-block',
  icon: (color = [colors.grey900]) =>
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
<path fill="${color[0]}" d="M7.99419 3.99419C7.99566 3.99273 7.99712 3.99202 7.99712 3.99202L8.00004 3.99177H16L16.003 3.99202C16.003 3.99202 16.0044 3.99273 16.0059 3.99419C16.0073 3.99566 16.0081 3.99732 16.0081 3.99732L16.0083 4.00004V5.55496C16.0083 6.59575 15.6035 7.59573 14.8794 8.34339L12 11.3167L9.12066 8.34339C8.39661 7.59573 7.99177 6.59575 7.99177 5.55496V4.00004L7.99202 3.99712C7.99202 3.99712 7.99273 3.99566 7.99419 3.99419ZM9.12066 15.6567L12 12.6834L14.8794 15.6567C15.6035 16.4043 16.0083 17.4043 16.0083 18.4451V20L16.0082 20.002L16.0081 20.003C16.0081 20.003 16.0073 20.0044 16.0059 20.0059C16.0044 20.0073 16.0028 20.0081 16.0028 20.0081L16 20.0083H8.00004L7.99712 20.0081C7.99712 20.0081 7.99566 20.0073 7.99419 20.0059C7.99273 20.0044 7.99196 20.0028 7.99196 20.0028L7.99177 20V18.4451C7.99177 17.4043 8.39661 16.4043 9.12066 15.6567ZM8.00004 2.0083C7.45031 2.0083 6.95101 2.23232 6.59167 2.59167C6.23232 2.95101 6.0083 3.45031 6.0083 4.00004V5.55496C6.0083 7.11078 6.61347 8.6056 7.69582 9.72324L9.90071 12L7.69582 14.2768C6.61347 15.3945 6.0083 16.8893 6.0083 18.4451V20C6.0083 20.5498 6.23232 21.0491 6.59167 21.4084C6.95102 21.7678 7.45031 21.9918 8.00004 21.9918H16C16.5498 21.9918 17.0491 21.7678 17.4084 21.4084C17.7678 21.0491 17.9918 20.5498 17.9918 20V18.4451C17.9918 16.8893 17.3866 15.3945 16.3043 14.2768L14.0994 12L16.3043 9.72324C17.3866 8.6056 17.9918 7.11078 17.9918 5.55496V4.00004C17.9918 3.45031 17.7678 2.95102 17.4084 2.59167C17.0491 2.23232 16.5498 2.0083 16 2.0083H8.00004ZM10 17.9918H14V16.0083H10V17.9918Z"/>
</svg>
`
}

export default hourGlass
