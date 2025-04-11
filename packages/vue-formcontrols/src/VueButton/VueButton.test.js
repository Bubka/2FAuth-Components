import { fireEvent, render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import VueButton from './VueButton.vue'

describe('button', () => {
    it('should emit a click event when clicked', async () => {
        const { emitted } = render(VueButton, {
            props: {
                label: 'label',
            },
        })

        await fireEvent.click(screen.getByText('label'))

        expect(emitted()).toMatchInlineSnapshot(`
      {
        "click": [
          [
            MouseEvent {
              "isTrusted": false,
            },
          ],
        ],
      }
    `)
    })

    describe('color', () => {
        it('should render a is-link button by default', () => {
            const button = render(VueButton)

            expect(button.html()).toMatchSnapshot()
        })

        it('should render a custom color button', () => {
            const button = render(VueButton, {
                props: {
                    color: 'is-success',
                },
            })

            expect(button.html()).toMatchSnapshot()
        })
    })

    describe('label', () => {
        it('should render a default label with bracket', () => {
            const button = render(VueButton)

            expect(button.html()).toMatchSnapshot()
        })

        it('should render passed label', () => {
            const button = render(VueButton, {
                props: {
                    label: 'label',
                },
            })

            expect(button.html()).toMatchSnapshot()
        })
    })
})