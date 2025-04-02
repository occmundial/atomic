import colors from '@/tokens/ct/colors.json'
import spacing from '@/tokens/ct/spacing.json'
import fonts from '@/tokens/ct/fonts.json'
import { objectToFontValue } from '@/utils/font'
import { CT as brand } from '@/constants/index'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  top: {
    height: 21,
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing['size-2']
  },
  left: {
    float: 'left'
  },
  bottom: {
    height: 21,
    display: 'flex',
    alignItems: 'center',
    marginTop: spacing['size-2']
  },
  validAssistiveText: {
    color: colors.text.default //Pendiente de ajustar para CT
  },
  errorAssistiveText: {
    color: colors.text.error //Pendiente de ajustar para CT
  },
  errorIcon: {
    marginTop: -2,
    marginRight: spacing['size-1']
  },
  stackGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing['size-4']
  },
  choiceGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing['size-4']
  },
  label: {
    //Clase pendiente de ajustar para CT
    font: objectToFontValue(fonts['text-field-label'], brand),
    color: colors.text.default,
    transition: '0.3s all'
  }
}

export default styles
