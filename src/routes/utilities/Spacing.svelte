<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="spacing" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Spacing</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Spacing fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div id="spacing-property" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Margin and padding</div>
        <p>The utilities classes of margin and padding from 0 to 3rem are available to using, just follow the pattern:</p>
        <p>(device-orientation):(device-type):(property)(sides)-(sizes)</p>
        <p>Where device-orientation is one of:</p>
        <ul>
            <li>l - for landscape</li>
            <li>p - for portrait</li>
        </ul>
        <p>Where device-type is one of:</p>
        <ul>
            <li>d - for desktop</li>
            <li>t - for tablet</li>
            <li>m - for mobile</li>
        </ul>
        <p>Where property is one of:</p>
        <ul>
            <li>m - for set margin</li>
            <li>p - for set padding</li>
        </ul>
        <p>Where sides is one of:</p>
        <ul>
            <li>t - for classes margin-top or padding-top</li>
            <li>b - for classes margin-bottom or padding-bottom</li>
            <li>s - for classes margin-left or padding-left, margin-right or padding-right</li>
            <li>e - for classes margin-right or padding-right, margin-left or padding-left</li>
            <li>x - for classes both *-left and *-right</li>
            <li>y - for classes both *-top and *-bottom</li>
            <li>empty - for classes that set a margin or padding on all 4 sides of the element</li>
        </ul>
        <p>Where sizes is one of:</p>
        <ul>
            <li>0 - for classes that eliminate the margin or padding by setting it to 0</li>
            <li>1 - set the margin or padding to --key-size * .25</li>
            <li>2 - set the margin or padding to --key-size * .5</li>
            <li>3 - set the margin or padding to --key-size</li>
            <li>4 - set the margin or padding to --key-size * 1.5</li>
            <li>5 - set the margin or padding to --key-size * 3</li>
            <li>auto - for classes that set only the margin to auto</li>
        </ul>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                ...
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
        ...
                '
            />
        </div>
    </div>
    <div id="gaping" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Gaping</div>
        <p>When using display as grid or flex, you can make use of gap utilities on the parent grid container. Pay attention: Safari do not support multi layout gaping.</p>
        <ul>
            <li>0 - set the gap to 0</li>
            <li>1 - set the gap to --key-size * .25</li>
            <li>2 - set the gap to --key-size * .5</li>
            <li>3 - set the gap to --key-size</li>
            <li>4 - set the gap to --key-size * 1.5</li>
            <li>5 - set the gap to --key-size * 3</li>
        </ul>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4 d-flex g-4">
                <div class="bg-background p-4">One</div>
                <div class="bg-background p-4">Two</div>
                <div class="bg-background p-4">Three</div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="d-flex g-4">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
    </div>
                '
            />
        </div>
    </div>
</div>