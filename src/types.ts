export type DescriptionType = "justText" | "list";

export type ListDescriptionItem = {
	label: string;
	value: string;
	actionText?: string;
};

export interface Props {
	title: string;
	number: string | number;
	icon: string;
    iconBackgroundAccent: string;
	header: string;
	subheader?: string;
	descriptionType: DescriptionType;
	description?: string;
	list?: ListDescriptionItem[];
}

