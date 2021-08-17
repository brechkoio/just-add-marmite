import Link from 'next/link';

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbail } = recipe.fields;

    return (
        <div className='card'>
            <div className='features'>

            </div>
            <div className='content'>
                <div className='info'>
                    <h4>{title}</h4>
                    <p>Take approx { cookingTime } mins to make</p>
                </div>
                <div className='actions'>
                    <Link href={'/recipes/' + slug}>Cook this</Link>
                </div>
            </div>
        </div>
    );
}