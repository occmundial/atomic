import colors from '@/tokens/colors'

const spinner = {
  width: '24px',
  height: '24px',
  display: 'inline-block',
  icon: (color = colors.grey900) => `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:url(#SVGID_1_);}
    </style>
    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="21" y1="12" x2="3" y2="12">
      <stop offset="0.1778" style="stop-color:${color};stop-opacity:0"/>
      <stop offset="0.2271" style="stop-color:${color};stop-opacity:0.1"/>
      <stop offset="0.3157" style="stop-color:${color};stop-opacity:0.4"/>
      <stop offset="0.4525" style="stop-color:${color};stop-opacity:0.7"/>
      <stop offset="0.5546" style="stop-color:${color}"/>
      <stop offset="0.9278" style="stop-color:${color}"/>
    </linearGradient>
    <path class="st0" d="M19.1,12c0.1,4-3.1,7.2-7.1,7.2S4.8,16,4.8,12S8,4.8,12,4.8V3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9H19.1z"/>
  </svg>`
}

export default spinner
