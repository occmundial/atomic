import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: spacing['size-2']
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
    color: colors.text.corp.secondary
  },
  errorAssistiveText: {
    color: colors.text.error
  },
  errorIcon: {
    marginTop: -2,
    marginRight: spacing['size-1']
  },
  stackGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${spacing['size-4']} ${spacing['size-2']}`
  },
  choiceGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${spacing['size-4']} ${spacing['size-2']}`
  },
  label: {
    font: objectToFontValue(fonts['text-field-label']),
    color: colors.text.corp.primary,
    transition: '0.3s all'
  }
})
