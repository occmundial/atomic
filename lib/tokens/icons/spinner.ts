import colors from '@/tokens/colors'

const spinner = {
  width: '24px',
  height: '24px',
  display: 'inline-block',
  icon: (color = colors.grey900) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientTransform="translate(12 12) scale(9)" gradientUnits="userSpaceOnUse">
        <stop offset=".041" stop-color="${color}" stop-opacity=".01"/>
        <stop offset=".742" stop-color="${color}"/>
        <stop offset=".743" stop-color="${color}" stop-opacity=".01"/>
      </radialGradient>
      <path fill="url(#paint0_angular)" fill-rule="evenodd" d="M12 19.227c-3.992 0-7.227-3.235-7.227-7.227 0-3.991 3.235-7.227 7.227-7.227 3.992 0 7.227 3.236 7.227 7.227 0 3.992-3.235 7.227-7.227 7.227zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" clip-rule="evenodd"/>
    </svg>`
}

export default spinner
