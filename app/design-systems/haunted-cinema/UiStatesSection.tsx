import { Button, EmptyState, ErrorState, LoadingState, SuccessState } from "../../components/haunted-cinema";
import { Section, Specimen } from "./Section";

export function UiStatesSection() {
  return (
    <Section number={6} title="UI states" intro="What a screen shows when there is nothing, something on the way, a failure, or a result. Each has its own frame, so none depends on color.">
      <Specimen title="Empty" usage="A search or filter found nothing. Say why and offer a way back.">
        <EmptyState title="No tracks found" action={<Button>Clear search</Button>}>
          Nothing on the album matches &ldquo;xyz&rdquo;.
        </EmptyState>
      </Specimen>
      <Specimen title="Loading" usage="Placeholder bars where the content will land. They pulse unless motion is reduced.">
        <LoadingState label="Loading the tracks" />
      </Specimen>
      <Specimen title="Error" usage="Hazard stripes, a warning icon and the word &lsquo;Error&rsquo;. Retrying is the primary action.">
        <ErrorState title="The notes didn't load" action={<Button variant="primary">Try again</Button>}>
          Check the connection and try once more.
        </ErrorState>
      </Specimen>
      <Specimen title="Success" usage="A solid frame and a check mark. Confirm, then get out of the way.">
        <SuccessState title="Notes loaded" action={<Button>Back to tracks</Button>}>
          All nine tracks are ready to browse.
        </SuccessState>
      </Specimen>
    </Section>
  );
}
