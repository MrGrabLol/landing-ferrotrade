import '../css/Map.css'

export function Map() {
    return (
        <div className='map-container'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2338.
                    446929037736!2d58.380912732270744!3d53.961051532259475!3m2!1i1024!2i768!4f13.
                    1!3m2!1m1!2zNTPCsDU3JzQwLjEiTiA1OMKwMjInNTAuOCJF!5e1!3m2!1sen!2sus!4v1680879658156!5m2!1sen!2sus"
                width="600" height="450" allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}