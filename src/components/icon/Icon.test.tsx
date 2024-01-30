import {render, screen} from "@testing-library/react";
import {expect, it} from "vitest"
import {Icon} from "./Icon.tsx";

it('should render correctly', () => {
    const iconName = 'mock';
    render(<Icon name={iconName}></Icon>);
    expect(screen.getByText(iconName)).toBeDefined()
})