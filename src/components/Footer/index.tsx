import { Fragment } from 'react'

import Button from '@/components/Button'
import Flexbox from '@/components/Flexbox'
import AtomicFooter from '@/components/Footer'
import useStyles from './styles'
import { bottomLinks, columns } from './utils'
import { AndroidApp, AppGallery, Certificate, IOSApp } from './Badges'

const copyText = (
  <p style={{ textAlign: 'center' }}>
    Derechos reservados. Versión del sitio candy-home@1.44.0
  </p>
)

const Aux = ({ classes }) => (
  <Flexbox
    display="flex"
    className={classes.bottomSection}
    alignItems="center"
    justifyContent="center"
  >
    <div className={classes.socialMediaContainer}>
      <IOSApp show />
      <AndroidApp show />
      <AppGallery />
    </div>
    <Flexbox display="flex" direction="row" style={{ columnGap: 4 }}>
      <Button
        iconLeft="facebook"
        href="https://www.facebook.com/occoficial"
        target="_blank"
        theme="ghostGrey"
        size="lg"
      />
      <Button
        iconLeft="instagram"
        href="https://www.facebook.com/occoficial"
        target="_blank"
        theme="ghostGrey"
        size="lg"
      />
      <Button
        iconLeft="tiktok"
        href="https://www.facebook.com/occoficial"
        target="_blank"
        theme="ghostGrey"
        size="lg"
      />
      <Button
        iconLeft="linkedin"
        href="https://www.facebook.com/occoficial"
        target="_blank"
        theme="ghostGrey"
        size="lg"
      />
    </Flexbox>
    <Certificate />
  </Flexbox>
)

const TopElement = () => (
  <Flexbox display="flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#080D39"
      width="102"
      height="40"
      viewBox="0 0 82 33"
    >
      <path d="M75.3501 23.1395C78.5792 23.1395 81.139 21.1507 81.6021 18.2058L77.8116 17.998C77.4785 19.1331 76.454 19.8046 75.2486 19.8046C73.4818 19.8046 72.3018 18.4872 72.3018 16.4728C72.3018 14.4584 73.4818 13.1411 75.2486 13.1411C76.454 13.1411 77.4785 13.8125 77.8116 14.9476L81.6021 14.7398C81.1422 11.795 78.5792 9.80615 75.3501 9.80615C71.3787 9.80615 68.4066 12.5943 68.4066 16.4696C68.4066 20.3449 71.3787 23.1331 75.3501 23.1331V23.1395ZM44.2453 19.8333C42.4785 19.8333 41.2985 18.516 41.2985 16.476C41.2985 14.436 42.4785 13.1443 44.2453 13.1443C46.0122 13.1443 47.1414 14.4616 47.1414 16.476C47.1414 18.4904 45.9614 19.8333 44.2453 19.8333ZM44.2453 23.1651C48.1406 23.1651 51.0335 20.3257 51.0335 16.476C51.0335 12.6263 48.1374 9.81255 44.2453 9.81255C40.3533 9.81255 37.4033 12.6519 37.4033 16.476C37.4033 20.3002 40.3247 23.1651 44.2453 23.1651ZM60.0547 23.1651C63.4868 23.1651 66.1259 20.8405 66.3828 17.6655L62.643 17.4576C62.4115 18.9029 61.3108 19.8333 59.9531 19.8333C58.1863 19.8333 57.0064 18.516 57.0064 16.476C57.0064 14.436 58.1863 13.1443 59.9531 13.1443C61.3361 13.1443 62.4115 14.0492 62.643 15.4432L66.3828 15.2354C66.1259 12.1115 63.4868 9.81255 60.0547 9.81255C56.0833 9.81255 53.1111 12.6007 53.1111 16.476C53.1111 20.3513 56.0833 23.1651 60.0547 23.1651Z"></path>
      <path d="M17.2081 13.456C16.799 13.2738 16.3485 13.1683 15.8759 13.1683C14.0615 13.1683 12.5865 14.6551 12.5865 16.484C12.5865 18.313 14.0615 19.7998 15.8759 19.7998C17.6903 19.7998 19.1653 18.313 19.1653 16.484C19.1653 16.0044 19.0638 15.5536 18.8798 15.1411C17.8299 15.7326 16.0979 16.711 16.0979 16.711C15.8188 16.8805 15.4826 16.5352 15.6507 16.2602L17.2081 13.456ZM31.736 6.33533V2.03477C29.4807 4.17386 23.2413 10.0763 20.6815 12.5C21.5665 13.5839 22.1026 14.9716 22.1026 16.484C22.1026 19.9436 19.3112 22.7574 15.8791 22.7574C12.447 22.7574 9.65559 19.9436 9.65559 16.484C9.65559 13.0244 12.447 10.2106 15.8791 10.2106C17.3794 10.2106 18.7561 10.7478 19.8314 11.6431L30.2134 0.5H25.947C24.5387 0.5 23.3079 1.245 22.6069 2.36091C16.8973 -0.446443 9.67779 0.186651 4.65967 5.18106C-3.33697 13.1715 -0.662965 27.0132 9.78881 31.301C15.5809 33.7726 22.7021 32.3273 27.089 27.7902C31.5203 23.3521 32.7859 16.209 30.2578 10.4824C30.1468 10.2138 30.0231 9.95484 29.8994 9.69584C31.0032 8.98921 31.736 7.7486 31.736 6.33533ZM24.7639 25.4432C19.9646 30.3641 11.7904 30.3641 6.98793 25.4432C2.1062 20.6055 2.1062 12.3657 6.98793 7.52478C10.9561 3.45763 17.2272 2.7542 21.9947 5.41127V8.98601C20.3294 7.60152 18.1978 6.77018 15.8759 6.77018C10.5628 6.77018 6.23933 11.1283 6.23933 16.484C6.23933 21.8397 10.5628 26.1978 15.8759 26.1978C21.189 26.1978 25.5125 21.8397 25.5125 16.484C25.5125 14.1435 24.6878 11.9948 23.3143 10.3161H26.8606C29.4965 15.1219 28.7987 21.4432 24.7639 25.4432Z"></path>
    </svg>
  </Flexbox>
)

export default function FooterMDX() {
  const classes = useStyles()

  return (
    <Fragment>
      <AtomicFooter
        topElement={<TopElement />}
        columns={columns()}
        bottomLinks={bottomLinks(true)}
        aux={<Aux classes={classes} />}
        copyText={copyText}
        listClassName=""
        sectionDivider
      />
    </Fragment>
  )
}
