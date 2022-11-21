import './main.styles.scss'
import CategoryItem from '../category-item/category-item.component'

const Main = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	)
}

export default Main
