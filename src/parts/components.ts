import { addComponent } from '@nuxt/kit'
import { resolve } from 'path'
import { runtimeDir } from '../utils'

export const setupUtilityComponents = () => {
  addComponent({
    name: 'IonAnimation',
    filePath: resolve(runtimeDir, 'components', 'IonAnimation.vue'),
  })
}
