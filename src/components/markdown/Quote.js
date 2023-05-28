export default function Quote({ children }) {
    return (<>
        <blockquote>
            {children}
        </blockquote>
    </>);
}

// TODO: Take author and date as props.  Show author name at bottom right.