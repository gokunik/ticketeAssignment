export const Footer: React.FC = () => {
  return (
    <footer className="border-t shadow mt-auto p-2">
      <ul className="flex justify-center items-center">
        <li className="text-sm"></li>
        <li>
          <ul className="flex gap-4">
            <li className="text-sm">
              <a
                href="https://gokunik.github.io/gokunik/"
                rel="noreferrer"
                target="_blank"
              >
                Portfolio
              </a>
            </li>
            <li className="text-sm">
              <a
                href="https://github.com/gokunik"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="text-sm">
              <a
                href="https://www.linkedin.com/in/gokunik/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
