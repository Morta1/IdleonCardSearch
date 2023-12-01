import { NextSeo } from 'next-seo';
import React, { useContext, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import { AppContext } from '../../../components/common/context/AppProvider';
import { cleanUnderscore, prefix } from 'utility/helpers';
import { CardTitleAndValue, CenteredStack, TitleAndValue } from '../../../components/common/styles';


const Islands = () => {
  const { state } = useContext(AppContext);
  const { islands } = state?.account || {};
  const [dialog, setDialog] = useState({ open: false, data: null });
  // const highestTotalStats = useMemo(() => getHighestCharacterByTotalStats(state?.characters), [state?.characters]);
  const handleLearnMoreClick = (island) => {
    setDialog({ data: island, open: true })
  }

  return <>
    <NextSeo
      title="Idleon Toolbox | Islands"
      description="Islands progressions and available upgrades"
    />
    <Typography variant={'h2'} mb={3}>Islands</Typography>
    <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
      <CardTitleAndValue title={'Bottles'} value={Math.round(islands?.bottles)}/>
      <CardTitleAndValue title={'Bottles/day'} value={islands?.bottlesPerDay}/>
    </Stack>
    <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
      {islands?.list?.map((island, index) => {
        const {
          name,
          description,
          unlocked,
          cost,
          trash,
          currentTrial,
          bestDpsEver,
          shimmerCurrency,
          hoursAfk,
          learnMore
        } = island;
        return <Card key={name}
                     sx={{ width: 300, opacity: unlocked ? 1 : .5, display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Stack gap={2}>
              <Stack gap={2} direction={'row'} alignItems={'center'}>
                <img src={`${prefix}data/IslandSail${index}.png`} alt={''}/>
                <Typography>{name}</Typography>
              </Stack>
              <Typography>{cleanUnderscore(description)}</Typography>
              <Divider/>
              {!unlocked ? <Typography>Cost: {cost}</Typography> : null}
              {unlocked && island.hasOwnProperty('trash') ? <CenteredStack>
                <img src={`${prefix}etc/Trash_Currency.png`} alt={''}/>
                <Typography>{trash.toFixed(2)}</Typography>
              </CenteredStack> : null}
              {unlocked && currentTrial ? <Stack gap={1}>
                <TitleAndValue title={'Current trial'} value={cleanUnderscore(currentTrial)}/>
                <TitleAndValue title={'Best DPS ever'} value={cleanUnderscore(bestDpsEver)}/>
                <CenteredStack>
                  <img src={`${prefix}etc/Shimmer_Currency.png`} alt={''}/>
                  <Typography>{shimmerCurrency}</Typography>
                </CenteredStack>
              </Stack> : null}
              {unlocked && hoursAfk ? <Stack gap={1}>
                <TitleAndValue title={'Hours Afk'} value={cleanUnderscore(hoursAfk)}/>
              </Stack> : null}
            </Stack>
          </CardContent>
          <CardActions sx={{ mt: 'auto' }}>
            {learnMore ? <Button onClick={() => handleLearnMoreClick(island)} size="small">Learn More</Button> : null}
          </CardActions>
        </Card>
      })}
    </Stack>
    <Dialog open={dialog.open} onClose={() => setDialog({ ...dialog, open: false })}>
      <DialogTitle>{dialog?.data?.name} shop</DialogTitle>
      <DialogContent>
        <Stack gap={1}>
          {dialog?.data?.shop?.map(({ effect, cost, upgrades, unlocked }, index) => {
            const isImage = effect.includes('etc') || effect.includes('data');
            return <Card variant={'outlined'} key={'effect-' + index}
                         sx={{ border: unlocked ? '1px solid' : '', borderColor: unlocked ? 'success.light' : '' }}>
              <CardContent>
                <Stack gap={isImage ? 1 : 0} direction={isImage ? 'row' : 'column'}
                       alignItems={isImage ? 'center' : 'flex-start'}>
                  {isImage ? <img style={{ width: 30 }} src={`${prefix}${effect}.png`} alt={''}/> :
                    <Typography>{cleanUnderscore(effect)}</Typography>}
                  <Typography>Cost: {cost} {upgrades ? `(${upgrades})` : ''}</Typography>
                </Stack>
              </CardContent>
            </Card>
          })}

        </Stack> </DialogContent>
    </Dialog>
  </>
};

export default Islands;
