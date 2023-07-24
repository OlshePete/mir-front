import DOMPurify from 'dompurify';
import parse from "html-react-parser";

function RawHTML({dirtyHTML=""}) {
  if (dirtyHTML.length===0) return<></>
  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
  USE_PROFILES: { html: true },
});
  return (
    <>{parse(cleanHTML)}</>
  )
}

export default RawHTML