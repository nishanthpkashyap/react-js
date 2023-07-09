import './15_iii_normal_css.css'
import styles from './15_iii_module_css.module.css'

export function ModuleStyling()
{
    return (
        <div>
            <h1 className='error'>Module Styling</h1>
            <h1 className={styles.success}>Module Styling</h1>
        </div>
    )
}