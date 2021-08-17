import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;

    return (
        <div className='card'>
            <div className='features'>
                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    alt={title}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
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