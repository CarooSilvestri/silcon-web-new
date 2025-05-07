interface Props {
  info: string,
  item: string,
  icon: string
}
export default function ItemToContact({icon, item, info}: Props) {
  return (
    <div class="flex gap-2 items-start py-2">
        <div class="items-start">
            <p class="text-md">{item}</p>
            <p class="text-2xl"><strong>{info}</strong></p>
        </div>
    </div>
  );
}
